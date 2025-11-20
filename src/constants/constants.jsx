export const DEFAULT_APP_SETTINGS = {
  skin: "STANDARD",
  avatarImg: "/images/Profile_avatar_placeholder_large.png",
  userName: "User Name",
  hint: "Enter your PIN to access the system",

  backgroundImg: "/images/background_screen.jpeg",
  endScreenVideo: "/videos/windows_loading.mp4",
};

export const THEMES = {
  BASIC: "BASIC",
  FUTURISTIC: "FUTURISTIC",
  STANDARD: "STANDARD",
  RETRO: "RETRO",
};

export const THEME_ASSETS = {
  [THEMES.RETRO]: {},
  [THEMES.STANDARD]: {
    backgroundImg: "/images/background_screen.jpeg",
    endScreenVideo: "/videos/windows_loading.mp4",
  },
  [THEMES.FUTURISTIC]: {},
};

export const ESCAPP_CLIENT_SETTINGS = {
  imagesPath: "./images/",
};
export const MAIN_SCREEN = "MAIN_SCREEN";
export const END_SCREEN = "END_SCREEN";
