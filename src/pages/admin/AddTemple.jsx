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
import { MapPin, Phone, Mail, FileText, Home, Shield } from 'lucide-react';


const AddTemple = () => {
  const [formData, setFormData] = useState({
    templeName: '',
    description: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    templePhotoFile: null,
    registrationCertificateFile: null,
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [previews, setPreviews] = useState({
    templePhotoFile: null,
    registrationCertificateFile: null,
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

  const validateForm = () => {
    const formErrors = {};

    if (!formData.templeName.trim()) formErrors.templeName = 'Temple name is required';

    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
    }

    if (!formData.street.trim()) formErrors.street = 'Street address is required';

    if (!formData.city.trim()) formErrors.city = 'City is required';

    if (!formData.state.trim()) formErrors.state = 'State is required';

    if (!formData.postalCode.trim()) formErrors.postalCode = 'Postal code is required';

    if (!formData.templePhotoFile) formErrors.templePhotoFile = 'Temple photo is required';

    if (!formData.registrationCertificateFile)
      formErrors.registrationCertificateFile = 'Registration certificate is required';

    if (formData.password && formData.password.length < 8) {
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
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, value);
      });

      // TODO: Submit to backend API

      alert('Temple registration successful!');
      setFormData({
        templeName: '',
        description: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        state: '',
        postalCode: '',
        templePhotoFile: null,
        registrationCertificateFile: null,
        password: '',
        confirmPassword: '',
      });
      setPreviews({
        templePhotoFile: null,
        registrationCertificateFile: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">Add Temple</h1>
      <p className="text-center text-gray-600 mb-8">
        Register a new temple with detailed information
      </p>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-6 h-6" />
            Temple Registration
          </CardTitle>
          <CardDescription>
            Fill in the details below to create a new temple record
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <CardContent className="space-y-8">
            {/* Temple Basic Info */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Home className="w-5 h-5" />
                Temple Details
              </h3>
              <div className="space-y-6">
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
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Brief description about the temple"
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* Contact Info */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10-digit phone number"
                    className={errors.phone ? 'border-red-500' : ''}
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
              </div>
            </section>

            {/* Address */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Temple Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="street">Street Address *</Label>
                  <Input
                    id="street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    placeholder="Street address"
                    className={errors.street ? 'border-red-500' : ''}
                  />
                  {errors.street && <p className="text-red-500 text-sm">{errors.street}</p>}
                </div>

                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className={errors.city ? 'border-red-500' : ''}
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>

                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className={errors.state ? 'border-red-500' : ''}
                  />
                  {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                </div>

                <div>
                  <Label htmlFor="postalCode">Postal Code *</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className={errors.postalCode ? 'border-red-500' : ''}
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                </div>
              </div>
            </section>

            {/* File Uploads */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Upload Documents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Temple Photo *', name: 'templePhotoFile' },
                  { label: 'Registration Certificate *', name: 'registrationCertificateFile' },
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

            {/* Optional Password Section */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Account Security (Optional)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a password (optional)"
                    className={errors.password ? 'border-red-500' : ''}
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                  <p className="text-xs text-gray-500">Must be at least 8 characters if set</p>
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
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
            <Button type="submit">Register Temple</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddTemple;