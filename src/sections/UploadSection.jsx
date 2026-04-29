import UploadZone from "../components/UploadZone";

function UploadSection({ currentUser }) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16">
      <UploadZone currentUser={currentUser} />
    </section>
  );
}

export default UploadSection;
