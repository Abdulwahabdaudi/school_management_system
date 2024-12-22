import React from 'react';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

const LandingPage = () => {
  const features = [
    {
      icon: <GraduationCap className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Student Management",
      description: "Track student progress, attendance, and performance with our comprehensive management tools."
    },
    {
      icon: <BookOpen className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Course Administration",
      description: "Easily manage courses, curricula, and academic resources in one centralized platform."
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Staff Portal",
      description: "Streamline communication between teachers, administrators, and support staff."
    },
    {
      icon: <Calendar className="w-12 h-12 mb-4 text-blue-600" />,
      title: "Schedule Planning",
      description: "Efficient timetable management and event scheduling for the entire institution."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduManager</span>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Modern School Management</span>
                <span className="block text-blue-600">Coming Soon</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                A comprehensive solution for educational institutions to manage students, staff, courses, and resources efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Currently Under Development
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We're working hard to bring you a powerful and intuitive school management system. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} EduManager. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;