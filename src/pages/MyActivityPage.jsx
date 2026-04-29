import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getUserActivity, removeUserActivityItem } from "../utils/userActivity";

export default function MyActivityPage({
  user,
  onSignIn,
  onSignUp,
  currentUser,
  onLogout,
}) {
  const [activityItems, setActivityItems] = useState(() =>
    getUserActivity(user),
  );

  useEffect(() => {
    setActivityItems(getUserActivity(user));
  }, [user]);

  const handleRemoveActivityItem = (itemId) => {
    const nextItems = removeUserActivityItem(user, itemId);
    setActivityItems(nextItems);
    toast.success("Image removed from activity");
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#06050F] font-plus text-[#F0EEFF]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(79,70,229,.18)_0%,transparent_70%),radial-gradient(ellipse_60%_50%_at_85%_20%,rgba(124,58,237,.14)_0%,transparent_65%),radial-gradient(ellipse_70%_60%_at_50%_80%,rgba(37,99,235,.12)_0%,transparent_65%),radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(168,85,247,.10)_0%,transparent_60%)]" />
      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.04)_1px,transparent_0)] bg-[length:12px_12px] opacity-20" />

      <Navbar
        onSignIn={onSignIn}
        onSignUp={onSignUp}
        currentUser={currentUser}
        onLogout={onLogout}
      />

      <section className="relative z-10 mx-auto w-full max-w-[1180px] px-6 py-12 md:px-10">
        <div className="rounded-[26px] border border-violet-500/25 bg-[rgba(18,15,40,.74)] p-6 backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-violet-300/90">
                Your Generated Images
              </p>
              <h1 className="mt-2 font-syne text-[clamp(28px,4vw,46px)] font-extrabold">
                My Activity
              </h1>
              <p className="mt-2 max-w-[720px] text-sm text-[#A9A2C8] md:text-base">
                All generated images appear here. You can open them or remove
                them as needed.
              </p>
            </div>
            <span className="rounded-full border border-violet-500/35 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
              {activityItems.length} images
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] border border-violet-500/25 bg-[rgba(18,15,40,.72)] p-4 backdrop-blur-xl md:p-6">
          {activityItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-violet-500/30 bg-violet-500/5 px-4 py-10 text-center text-sm text-[#8B85A8]">
              No image has been generated yet.
            </div>
          ) : (
            <div className="space-y-4">
              {activityItems.map((item, index) => {
                const createdLabel = item?.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : "Recently";

                return (
                  <article
                    key={item.id}
                    className="flex flex-col gap-4 rounded-2xl border border-violet-500/25 bg-[#0f0c22]/75 p-4 md:flex-row md:items-center"
                  >
                    <div className="flex h-28 w-full shrink-0 overflow-hidden rounded-2xl border border-violet-500/20 bg-[#171232] md:w-40">
                      <img
                        src={item.imageUrl}
                        alt={item.fileName || "Generated activity image"}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-violet-500/15 px-2 text-xs font-semibold text-violet-100">
                          {index + 1}
                        </span>
                        <p className="truncate text-base font-semibold text-[#F0EEFF]">
                          {item.fileName || "generated-image"}
                        </p>
                      </div>
                      <p className="mt-2 text-sm text-[#8B85A8]">
                        Generated: {createdLabel}
                      </p>
                      <p className="mt-1 truncate text-xs text-[#6F6891]">
                        {item.imageUrl}
                      </p>
                    </div>

                    <div className="flex shrink-0 gap-2 self-start md:self-center">
                      <a
                        href={item.imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-violet-500/35 px-4 py-2 text-sm text-[#F0EEFF] transition hover:border-violet-400/60 hover:bg-violet-500/10"
                      >
                        Open
                      </a>
                      <button
                        type="button"
                        onClick={() => handleRemoveActivityItem(item.id)}
                        className="inline-flex items-center justify-center rounded-full border border-rose-400/35 px-4 py-2 text-sm text-rose-200 transition hover:border-rose-300/70 hover:bg-rose-500/10"
                      >
                        Remove
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
