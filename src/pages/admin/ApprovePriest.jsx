
import React, { useEffect, useState } from 'react';
import { CheckCircle, UserCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/dashboard/admin/Card';
import { Button } from "../../components/dashboard/admin/Button";


const samplePriests = [
  {
    id: 1,
    fullName: 'Ramesh Sharma',
    email: 'ramesh.sharma@example.com',
    phone: '9876543210',
    approved: false,
    address: '123 Temple Street, Cityville',
    dob: '1980-05-15',
    experienceYears: 10,
    languages: ['Hindi', 'Sanskrit'],
    documents: ['ID Proof', 'Certification'],
  },
  {
    id: 2,
    fullName: 'Sita Devi',
    email: 'sita.devi@example.com',
    phone: '9123456780',
    approved: true,
    address: '456 Holy Road, Townsville',
    dob: '1975-11-20',
    experienceYears: 15,
    languages: ['Tamil', 'English'],
    documents: ['ID Proof', 'Certification'],
  },
  {
    id: 3,
    fullName: 'Mahesh Patel',
    email: 'mahesh.patel@example.com',
    phone: '9988776655',
    approved: false,
    address: '789 Sacred Lane, Villagetown',
    dob: '1985-02-10',
    experienceYears: 8,
    languages: ['Gujarati', 'Hindi'],
    documents: ['ID Proof'],
  },
];

const ApprovePriest = () => {
  const [priests, setPriests] = useState([]);
  const [approvingId, setApprovingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setPriests(samplePriests);
    }, 500);
  }, []);

  const handleApprove = (priestId) => {
    setApprovingId(priestId);
    setError(null);

    setTimeout(() => {
      setPriests((prev) =>
        prev.map((priest) =>
          priest.id === priestId ? { ...priest, approved: true } : priest
        )
      );
      setApprovingId(null);
      setExpandedId(null); // Optionally collapse after approval
    }, 1000);
  };

  const toggleExpand = (priestId) => {
    setExpandedId((prev) => (prev === priestId ? null : priestId));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="w-6 h-6" />
            Approve Registered Priests
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          {priests.length === 0 && <p>Loading priests...</p>}

          {priests.length > 0 && (
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2 text-left">Name</th>
                  <th className="border border-gray-300 p-2 text-left">Email</th>
                  <th className="border border-gray-300 p-2 text-left">Phone</th>
                  <th className="border border-gray-300 p-2 text-left">Status</th>
                  <th className="border border-gray-300 p-2 text-left">Expand</th>
                </tr>
              </thead>
              <tbody>
                {priests.map((priest) => (
                  <React.Fragment key={priest.id}>
                    <tr className="hover:bg-gray-50">
                      <td className="border border-gray-300 p-2">{priest.fullName}</td>
                      <td className="border border-gray-300 p-2">{priest.email}</td>
                      <td className="border border-gray-300 p-2">{priest.phone}</td>
                      <td className="border border-gray-300 p-2">
                        {priest.approved ? (
                          <span className="text-green-600 font-semibold flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> Approved
                          </span>
                        ) : (
                          <span className="text-yellow-600 font-semibold">Pending</span>
                        )}
                      </td>
                      <td className="border border-gray-300 p-2 text-center">
                        <button
                          onClick={() => toggleExpand(priest.id)}
                          aria-label={expandedId === priest.id ? 'Collapse' : 'Expand'}
                          className="p-1 rounded hover:bg-gray-200"
                        >
                          {expandedId === priest.id ? (
                            <ChevronUp className="w-5 h-5" />
                          ) : (
                            <ChevronDown className="w-5 h-5" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {expandedId === priest.id && (
                      <tr className="bg-gray-50">
                        <td colSpan={5} className="border border-gray-300 p-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <strong>Address:</strong> {priest.address}
                            </div>
                            <div>
                              <strong>Date of Birth:</strong> {priest.dob}
                            </div>
                            <div>
                              <strong>Experience (years):</strong> {priest.experienceYears}
                            </div>
                            <div>
                              <strong>Languages:</strong> {priest.languages.join(', ')}
                            </div>
                            <div>
                              <strong>Documents:</strong> {priest.documents.join(', ')}
                            </div>
                          </div>

                          {!priest.approved && (
                            <div className="mt-4">
                              <Button
                                onClick={() => handleApprove(priest.id)}
                                disabled={approvingId === priest.id}
                              >
                                {approvingId === priest.id ? 'Approving...' : 'Approve'}
                              </Button>
                            </div>
                          )}
                          {priest.approved && (
                            <p className="mt-4 text-green-700 font-semibold">Already approved</p>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ApprovePriest;