import { useState } from 'react';
import { Button } from "../../components/dashboard/admin/Button";
import { Input } from "../../components/dashboard/admin/input";
import { Label } from "../../components/dashboard/admin/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/dashboard/admin/Card";
import { User, Phone, Mail, MapPin, FileText, Shield } from 'lucide-react';
const AddDeliveryPartner = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    vehicleNumber: '',
    licenseFile: null,
    identityProofFile: null,
    addressStreet: '',
    addressCity: '',
    addressState: '',
    addressPostalCode: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [previews, setPreviews] = useState({
    licenseFile: null,
    identityProofFile: null,
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

    if (!formData.vehicleNumber.trim()) formErrors.vehicleNumber = 'Vehicle number is required';

    if (!formData.licenseFile) formErrors.licenseFile = 'Driving license image is required';

    if (!formData.identityProofFile) formErrors.identityProofFile = 'Identity proof image is required';

    if (!formData.addressStreet.trim()) formErrors.addressStreet = 'Street address is required';

    if (!formData.addressCity.trim()) formErrors.addressCity = 'City is required';

    if (!formData.addressState.trim()) formErrors.addressState = 'State is required';

    if (!formData.addressPostalCode.trim()) formErrors.addressPostalCode = 'Postal code is required';

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
      const submissionData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submissionData.append(key, value);
      });

      // TODO: Submit to backend API

      alert('Delivery partner registration successful!');
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        vehicleNumber: '',
        licenseFile: null,
        identityProofFile: null,
        addressStreet: '',
        addressCity: '',
        addressState: '',
        addressPostalCode: '',
        password: '',
        confirmPassword: '',
      });
      setPreviews({
        licenseFile: null,
        identityProofFile: null,
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-center mb-2">Add Delivery Partner</h1>
      <p className="text-center text-gray-600 mb-8">
        Register a new delivery partner with their details and documents
      </p>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-6 h-6" />
            Delivery Partner Registration
          </CardTitle>
          <CardDescription>
            Fill in the details below to create a new delivery partner account
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <CardContent className="space-y-8">
            {/* Personal Details */}
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
                  <Label htmlFor="vehicleNumber">Vehicle Number *</Label>
                  <Input
                    id="vehicleNumber"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    placeholder="Enter vehicle number"
                    className={errors.vehicleNumber ? 'border-red-500' : ''}
                  />
                  {errors.vehicleNumber && (
                    <p className="text-red-500 text-sm">{errors.vehicleNumber}</p>
                  )}
                </div>
              </div>

              {/* Document Uploads */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Driving License Image *', name: 'licenseFile' },
                  { label: 'Identity Proof Image *', name: 'identityProofFile' },
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

            {/* Address */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="addressStreet">Street Address *</Label>
                  <Input
                    id="addressStreet"
                    name="addressStreet"
                    value={formData.addressStreet}
                    onChange={handleChange}
                    placeholder="Street address"
                    className={errors.addressStreet ? 'border-red-500' : ''}
                  />
                  {errors.addressStreet && (
                    <p className="text-red-500 text-sm">{errors.addressStreet}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="addressCity">City *</Label>
                  <Input
                    id="addressCity"
                    name="addressCity"
                    value={formData.addressCity}
                    onChange={handleChange}
                    placeholder="City"
                    className={errors.addressCity ? 'border-red-500' : ''}
                  />
                  {errors.addressCity && <p className="text-red-500 text-sm">{errors.addressCity}</p>}
                </div>

                <div>
                  <Label htmlFor="addressState">State *</Label>
                  <Input
                    id="addressState"
                    name="addressState"
                    value={formData.addressState}
                    onChange={handleChange}
                    placeholder="State"
                    className={errors.addressState ? 'border-red-500' : ''}
                  />
                  {errors.addressState && <p className="text-red-500 text-sm">{errors.addressState}</p>}
                </div>

                <div>
                  <Label htmlFor="addressPostalCode">Postal Code *</Label>
                  <Input
                    id="addressPostalCode"
                    name="addressPostalCode"
                    value={formData.addressPostalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className={errors.addressPostalCode ? 'border-red-500' : ''}
                  />
                  {errors.addressPostalCode && (
                    <p className="text-red-500 text-sm">{errors.addressPostalCode}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Password */}
            <section>
              <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
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
            <Button type="submit">Register Delivery Partner</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default AddDeliveryPartner;