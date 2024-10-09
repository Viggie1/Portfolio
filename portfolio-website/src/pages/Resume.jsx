import resumeFile from "../files/resume_evangelos.pdf";

function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <embed src={resumeFile} type="application/pdf" width="80%" height="90%" className="h-screen w-screen"/>
    </div>
  );
}

export default ResumePage;

  