const USER_ACTIVITY_KEY = "pixelcut_user_activity";

const getUserActivityId = (user) => {
  if (!user || typeof user !== "object") {
    return "guest";
  }

  return String(user.id || user.email || user.name || "guest").toLowerCase();
};

const readStore = () => {
  try {
    const raw = localStorage.getItem(USER_ACTIVITY_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeStore = (store) => {
  try {
    localStorage.setItem(USER_ACTIVITY_KEY, JSON.stringify(store));
  } catch {
    // Ignore storage write failures in private mode or quota constraints.
  }
};

export const getUserActivity = (user) => {
  const store = readStore();
  const userId = getUserActivityId(user);
  const items = store[userId];

  return Array.isArray(items) ? items : [];
};

export const addUserActivityItem = (user, item) => {
  if (!item || typeof item !== "object") {
    return;
  }

  const store = readStore();
  const userId = getUserActivityId(user);
  const current = Array.isArray(store[userId]) ? store[userId] : [];

  store[userId] = [item, ...current].slice(0, 100);
  writeStore(store);
};

export const removeUserActivityItem = (user, itemId) => {
  if (!itemId) {
    return [];
  }

  const store = readStore();
  const userId = getUserActivityId(user);
  const current = Array.isArray(store[userId]) ? store[userId] : [];
  const nextItems = current.filter((item) => item?.id !== itemId);

  store[userId] = nextItems;
  writeStore(store);

  return nextItems;
};
