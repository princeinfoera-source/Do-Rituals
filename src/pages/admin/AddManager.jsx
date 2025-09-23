import { useState } from 'react';
import { Button } from "../../components/dashboard/admin/Button";
import { Input } from "../../components/dashboard/admin/Input";
import { Label } from "../../components/dashboard/admin/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/dashboard/admin/Card";
import { User, Shield, Mail, Phone, MapPin } from "lucide-react";

const AddManager = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    residence: '',
    panCardFile: null,
    aadharCardFile: null,
    birthCertificateFile: null,
    residenceProofFile: null,
    templeName: '',
    templeStreet: '',
    templeCity: '',
    templeState: '',
    templePostalCode: '',
    accessLevel: 'manager',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  // For previewing uploaded images
  const [previews, setPreviews] = useState({
    panCardFile: null,
    aadharCardFile: null,
    birthCertificateFile: null,
    residenceProofFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === 'file') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews((prev) => ({ ...prev, [name]: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        setPreviews((prev) => ({ ...prev, [name]: null }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const formErrors = {};

    if (!formData.fullName.trim()) formErrors.fullName = 'Full name is required';

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.mobile.trim()) {
      formErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits';
    }

    if (!formData.residence.trim()) formErrors.residence = 'Residence is required';

    if (!formData.panCardFile) formErrors.panCardFile = 'PAN card image is required';

    if (!formData.aadharCardFile) formErrors.aadharCardFile = 'Aadhar card image is required';

    if (!formData.birthCertificateFile) formErrors.birthCertificateFile = 'Birth certificate image is required';

    if (!formData.residenceProofFile) formErrors.residenceProofFile = 'Residence proof image is required';

    if (!formData.templeName.trim()) formErrors.templeName = 'Temple name is required';

    if (!formData.templeStreet.trim()) formErrors.templeStreet = 'Temple street address is required';

    if (!formData.templeCity.trim()) formErrors.templeCity = 'Temple city is required';

    if (!formData.templeState.trim()) formErrors.templeState = 'Temple state is required';

    if (!formData.templePostalCode.trim()) formErrors.templePostalCode = 'Temple postal code is required';

    if (!formData.password) {
      formErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      formErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare form data for submission (e.g., FormData for files)
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, value);
      });

      // TODO: Submit to backend API

      alert('Manager registration successful!');
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        residence: '',
        panCardFile: null,
        aadharCardFile: null,
        birthCertificateFile: null,
        residenceProofFile: null,
        templeName: '',
        templeStreet: '',
        templeCity: '',
        templeState: '',
        templePostalCode: '',
        accessLevel: 'manager',
        password: '',
        confirmPassword: '',
      });
      setPreviews({
        panCardFile: null,
        aadharCardFile: null,
        birthCertificateFile: null,
        residenceProofFile: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-2">Add Temple Manager</h1>
      <p className="text-center text-gray-600 mb-8">
        Register a new manager who can enroll priests to the temple
      </p>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-6 h-6" />
            Manager Registration
          </CardTitle>
          <CardDescription>
            Fill in the details below to create a new temple manager account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <CardContent className="space-y-8">
            {/* Personal Information */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={errors.fullName ? 'border-red-500' : ''}
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email address"
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="mobile">Mobile Number *</Label>
                  <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Enter 10-digit mobile number"
                    className={errors.mobile ? 'border-red-500' : ''}
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>

                <div>
                  <Label htmlFor="residence">Residence *</Label>
                  <Input
                    id="residence"
                    name="residence"
                    value={formData.residence}
                    onChange={handleChange}
                    placeholder="Enter residence address"
                    className={errors.residence ? 'border-red-500' : ''}
                  />
                  {errors.residence && <p className="text-red-500 text-sm">{errors.residence}</p>}
                </div>
              </div>

              {/* File Uploads */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'PAN Card Image *', name: 'panCardFile' },
                  { label: 'Aadhar Card Image *', name: 'aadharCardFile' },
                  { label: 'Birth Certificate Image *', name: 'birthCertificateFile' },
                  { label: 'Residence Proof Image *', name: 'residenceProofFile' },
                ].map(({ label, name }) => (
                  <div key={name}>
                    <Label htmlFor={name}>{label}</Label>
                    <Input
                      id={name}
                      name={name}
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleChange}
                      className={errors[name] ? 'border-red-500' : ''}
                    />
                    {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}

                    {previews[name] && (
                      <img
                        src={previews[name]}
                        alt={`${label} preview`}
                        className="mt-2 max-h-40 rounded border"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Temple Information */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Temple Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="templeName">Temple Name *</Label>
                  <Input
                    id="templeName"
                    name="templeName"
                    value={formData.templeName}
                    onChange={handleChange}
                    placeholder="Enter temple name"
                    className={errors.templeName ? 'border-red-500' : ''}
                  />
                  {errors.templeName && <p className="text-red-500 text-sm">{errors.templeName}</p>}
                </div>

                <div>
                  <Label htmlFor="templeStreet">Street Address *</Label>
                  <Input
                    id="templeStreet"
                    name="templeStreet"
                    value={formData.templeStreet}
                    onChange={handleChange}
                    placeholder="Street address"
                    className={errors.templeStreet ? 'border-red-500' : ''}
                  />
                  {errors.templeStreet && <p className="text-red-500 text-sm">{errors.templeStreet}</p>}
                </div>

                <div>
                  <Label htmlFor="templeCity">City *</Label>
                  <Input
                    id="templeCity"
                    name="templeCity"
                    value={formData.templeCity}
                    onChange={handleChange}
                    placeholder="City"
                    className={errors.templeCity ? 'border-red-500' : ''}
                  />
                  {errors.templeCity && <p className="text-red-500 text-sm">{errors.templeCity}</p>}
                </div>

                <div>
                  <Label htmlFor="templeState">State *</Label>
                  <Input
                    id="templeState"
                    name="templeState"
                    value={formData.templeState}
                    onChange={handleChange}
                    placeholder="State"
                    className={errors.templeState ? 'border-red-500' : ''}
                  />
                  {errors.templeState && <p className="text-red-500 text-sm">{errors.templeState}</p>}
                </div>

                <div>
                  <Label htmlFor="templePostalCode">Postal Code *</Label>
                  <Input
                    id="templePostalCode"
                    name="templePostalCode"
                    value={formData.templePostalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className={errors.templePostalCode ? 'border-red-500' : ''}
                  />
                  {errors.templePostalCode && (
                    <p className="text-red-500 text-sm">{errors.templePostalCode}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Access Level and Password */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Access & Security
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password"
                    className={errors.password ? 'border-red-500' : ''}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  <p className="text-xs text-gray-500">Must be at least 8 characters</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password *</Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm your password"
                    className={errors.confirmPassword ? 'border-red-500' : ''}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
                  )}
                </div>
              </div>
            </section>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button type="button" variant="outline" onClick={() => window.history.back()}>
              Cancel
            </Button>
            <Button type="submit">Register Manager</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddManager;