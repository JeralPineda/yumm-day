import { PlatformOSType } from "react-native";

export const getAvatarInitials = (name: string | undefined = "No User"): string => {
  const nameParse = name.toLocaleUpperCase();
  const initials: string[] = nameParse.split(" ");

  if (initials.length > 1 && name !== undefined) {
    return `${initials[0][0]}${initials[1][0]}`;
  }

  return `${initials[0][0]}${initials[0][2]}`;
};

export const getBorderColor = (colorScheme: "dark" | "light", platform: PlatformOSType): string => {
  switch (platform) {
    case "ios":
      return colorScheme === "dark" ? "#3434342c" : "#d0cdcd42";

    case "android":
      return colorScheme === "dark" ? "#343434a2" : "#d0cdcd42";

    default:
      return colorScheme === "dark" ? "#34343476" : "#d0cdcd42";
  }
};

export const getFirsAndLastName = (name: string): string => {
  const transformName = name.split(" ");

  if (transformName.length > 2) return `${transformName[0]} ${transformName[2]}`;
  if (transformName.length === 2) return `${transformName[0]} ${transformName[1]}`;

  return transformName[0];
};

export const capitalizeFirstLetter = (name: string) => {
  if (!name) return "";

  const nameLowercase = name.toLowerCase().split(" ");

  const result = nameLowercase
    .map((el) => {
      return el[0]?.toUpperCase() + el?.toLowerCase().slice(1);
    })
    .join(" ");

  return result;
};
