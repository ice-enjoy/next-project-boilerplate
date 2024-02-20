import { create } from 'zustand';

interface App {
  openConnectWalletModal: boolean;
  toggleConnectWalletModal: () => void;
}

const appStore = create<App>((set) => ({
  openConnectWalletModal: false,
  toggleConnectWalletModal: () =>
    set((state: App) => ({ openConnectWalletModal: !state.openConnectWalletModal })),
}));

export default appStore;

