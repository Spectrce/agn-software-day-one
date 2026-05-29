export default function ProfileCard() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">Tshepang</h1>
        <p className="text-gray-500 text-sm mb-4">Software Developer Program</p>

        <p className="text-gray-700 mb-4">
          I am a passionate student learning software development. I enjoy building things and solving problems with coding.
        </p>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Current Skills</h2>
          <p className="text-gray-600">Python, HTML, CSS</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Skills I Want to Learn</h2>
          <p className="text-gray-600">React, TypeScript, Node.js</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">GitHub</h2>
          <p className="text-blue-500">@Spectrce</p>
        </div>

        <button className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg border border-blue-700 hover:bg-blue-700 transition duration-200">
          View GitHub Profile
        </button>
      </div>
    </div>
  );
}
  


