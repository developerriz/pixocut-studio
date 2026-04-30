import UploadZone from "../components/UploadZone";

function UploadSection({ currentUser }) {
  return (
    <section className="page-shell relative z-10 pb-16">
      <UploadZone currentUser={currentUser} />
    </section>
  );
}

export default UploadSection;
