import { create } from "zustand"

const themeStore = create((set) => {
	return {
		darkMode: true,
		toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
	}
})

export { themeStore }
