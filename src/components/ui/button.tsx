// import { SemiboldText } from "@/components/typography/semibold-text";
import { moderateScale } from "@/lib/metrics";
import { ActivityIndicator, StyleProp, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";
import { SemiboldText } from "../typography/semibold-text";
import { cva, cx, type VariantProps } from "class-variance-authority";
import { Icons } from "@/assets/icons";
import { useColorScheme } from "nativewind";

const button = cva("button inline-flex items-center justify-center cursor-pointer transition-all duration-400", {
  variants: {
    intent: {
      primary: "bg-primary border-[1px] text-white hover:bg-primary-hover",
      "primary-inverter": "bg-white text-primary hover:bg-neutral-100 font-semibold shadow-md",
      secondary:
        "text-primary font-bold  shadow-[0_1px_1px_0_rgba(0,0,0,0.15)] bg-white/90" +
        "rounded-xl border-[1px] border-primary/70",
      tertiary: "bg-tertiary text-white",
      invisible: "bg-transparent hover:bg-neutral-200/60",
      white: "bg-white text-primary",
      icon: "flex-col",
      default: "bg-grayBackground",
      "icon-invisible": "bg-transparent",
      underline: "bg-transparent text-primary font-bold hover:!underline !px-0",
      login: "flex-row bg-neutral-950 border-[0.5px] border-neutral-950 mb-2 hover:bg-neutral-900 dark:bg-neutral-100",
      login2:
        "flex-row bg-neutral-100 border-[0.5px] border-neutral-950 mb-2 hover:bg-neutral-900 dark:bg-neutral-950 dark:border-neutral-100",
    },

    modifiers: {
      "full-width": "w-full",
    },

    size: {
      "x-small": "text-sm px-2 py-1",
      small: "h-[4rem] text-md px-4 sm:px-4",
      medium: "h-[4.5rem] text-md px-4 sm:px-[2rem] py-[1rem]",
      large: "h-[6rem] text-lg px-5",
      "x-large": "h-[8rem] text-xl py-4 px-[5rem]",
    },

    rounded: {
      small: "rounded-md",
      medium: "rounded-lg",
      large: "rounded-xl",
      "x-large": "rounded-[1.2rem]",
      "xx-large": "rounded-[2rem]",
      full: "rounded-full",
    },

    disabled: {
      true: "!bg-neutral-300 !cursor-not-allowed hover:!bg-neutral-300 !border-transparent",
      false: "",
    },

    isLoading: {
      true: "!bg-neutral-200 !cursor-not-allowed hover:!bg-neutral-200 !border-transparent",
      false: "",
    },
  },

  compoundVariants: [
    {
      intent: "invisible",
      size: "small",
      className: "!px-3",
    },

    {
      intent: "invisible",
      size: "x-small",
      className: "font-semibold rounded-sm",
    },
  ],

  defaultVariants: {
    intent: "primary",
    size: "medium",
    rounded: "large",
  },
});

export interface ButtonProps extends VariantProps<typeof button> {
  title?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  isLoading?: boolean;
  href?: string;
  target?: string;
  className?: string;
  textStyle?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  loginIcon?: "google" | "apple";

  //
  style?: StyleProp<ViewStyle>;
  // intent?: "primary" | "secondary" | "success" | "danger";
  handlePress: () => void;
  disabled?: boolean;
  isError?: boolean;
  isSuccess?: boolean;
}

export function Button({
  style,
  title,
  intent = "primary",
  handlePress,
  disabled,
  isLoading,
  isError,
  isSuccess,
  loginIcon,

  //
  size,
  rounded,
  href,
  target,
  className,
  textStyle,
  modifiers,
  iconLeft,
  iconRight,
  type,
  onClick,
}: ButtonProps) {
  const { colorScheme } = useColorScheme();

  // const theme = useTheme();

  // const getIntent = (intent: "primary" | "secondary" | "success" | "danger"): StyleProp<ViewStyle> => {
  //   switch (intent) {
  //     case "primary":
  //       return {
  //         backgroundColor: disabled || isLoading ? theme.GRAY_EXTRA_LIGHT : theme.PRIMARY_COLOR,
  //       };

  //     case "secondary":
  //       return {
  //         backgroundColor: disabled || isLoading ? theme.GRAY_EXTRA_LIGHT : theme.BACKGROUND_COLOR,
  //       };

  //     case "success":
  //       return {
  //         backgroundColor: disabled || isLoading ? theme.GRAY_EXTRA_LIGHT : theme.SUCCESS_BACKGROUND,
  //         borderWidth: moderateScale(1),
  //         borderColor: theme.SUCCESS_COLOR,
  //       };

  //     case "danger":
  //       return {
  //         backgroundColor: disabled || isLoading ? theme.GRAY_EXTRA_LIGHT : theme.ERROR_BACKGROUND,
  //         borderWidth: moderateScale(1),
  //         borderColor: theme.ERROR_COLOR,
  //       };

  //     default:
  //       return {
  //         backgroundColor: disabled || isLoading ? theme.GRAY_EXTRA_LIGHT : theme.PRIMARY_COLOR,
  //       };
  //   }
  // };

  // const getIntentText = (intent: "primary" | "secondary" | "success" | "danger"): StyleProp<TextStyle> => {
  //   switch (intent) {
  //     case "primary":
  //       return {
  //         color: disabled || isLoading ? theme.LIGHT_COLOR : "#fff",
  //       };

  //     case "secondary":
  //       return {
  //         color: disabled || isLoading ? theme.LIGHT_COLOR : theme.PRIMARY_COLOR,
  //       };

  //     case "success":
  //       return {
  //         color: disabled || isLoading ? theme.LIGHT_COLOR : theme.SUCCESS_COLOR,
  //       };

  //     case "danger":
  //       return {
  //         color: disabled || isLoading ? theme.LIGHT_COLOR : theme.ERROR_COLOR,
  //       };

  //     default:
  //       return {
  //         color: disabled || isLoading ? theme.LIGHT_COLOR : "#fff",
  //       };
  //   }
  // };

  return (
    <TouchableOpacity
      //
      className={button({ intent, size, rounded, modifiers, className, disabled, isLoading })}
      // style={[style, getIntent(intent)]}
      onPress={() => handlePress()}
      disabled={disabled || isLoading}
      activeOpacity={intent === "login2" ? 0.5 : 0.85}
    >
      {loginIcon && (
        <View className="mr-2">
          <Icons
            name={loginIcon}
            size={24}
            color={
              loginIcon === "apple" && colorScheme === "dark"
                ? "#000"
                : loginIcon === "apple"
                ? "rgb(245 245 245)"
                : "transparent"
            }
          />
        </View>
      )}
      {/* {intent === "danger" && (
        <MaterialIcons
          name="close"
          size={moderateScale(15)}
          color={theme.ERROR_COLOR}
          style={{ marginRight: moderateScale(5) }}
        />
      )} */}

      {/* {intent === "success" && (
        <MaterialCommunityIcons
          name="check"
          size={moderateScale(15)}
          color={theme.SUCCESS_COLOR}
          style={{ marginRight: moderateScale(5) }}
        />
      )}
      */}
      {isLoading ? (
        <ActivityIndicator
          //
          size={moderateScale(15)}
        />
      ) : (
        <SemiboldText
          //
          className={intent === "login2" ? "dark:text-neutral-100" : " text-neutral-100 dark:text-neutral-900"}
        >
          {title}
        </SemiboldText>
      )}
    </TouchableOpacity>
  );
}
