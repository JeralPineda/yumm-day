import { create } from "zustand";

export type Notification = {
  id?: string | number;
  type: "error" | "success" | "warning" | "info";
  message: string[];
};

interface UiState {
  notifications: Notification[] | null;
  isOpenButtomSheet: boolean;

  addNotification: (notification: Notification) => void;
  removeNotification: (id: Notification["id"]) => void;
  cleanNotifications: () => void;
  onOpenButtomSheet: () => void;
  onCloseButtomSheet: () => void;
}

export const useUiStore = create<UiState>()((set) => ({
  notifications: null,
  isOpenButtomSheet: false,

  addNotification: (notification: Notification) => {
    const newNotification: Notification = {
      ...notification,
      id: new Date().getTime() + 1,
    };

    set((state) => ({
      notifications:
        state.notifications !== null ? [...state.notifications, newNotification].slice(-3) : [newNotification],
    }));
  },

  removeNotification: (id: Notification["id"]) => {
    set((state) => ({
      notifications: state.notifications && state.notifications?.filter((notification) => notification.id !== id),
    }));
  },

  cleanNotifications: () => {
    set({ notifications: null });
  },

  onOpenButtomSheet: () => {
    set({ isOpenButtomSheet: true });
  },

  onCloseButtomSheet: () => {
    set({ isOpenButtomSheet: false });
  },
}));
