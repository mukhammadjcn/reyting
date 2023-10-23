import { ConfigProvider } from "antd";
import { ProviderProps } from "../type";

function AntConfigProvider({ children }: ProviderProps) {
  const colors = {
    primary: "#35C56D",
    secondary: "#343434",
    text_primary: "#222222",
    text_secondary: "#9a9a9a",
    stroke: "#e5e5e5",
    bg_secondary: "#F5F5F5",
    color_content_primary: "#4b38b3",
    color_content_tertiary: "#878a99",
    color_content_quaternary: "#f3f6f9",

    color_sidebar: "#263238",
    color_input: "#fff",
    color_input_hover: "#b7afe1",
    color_input_border: "#D1D5DB",
    color_switch: "#fff",

    color_white: "#fff",
    color_green: "#45cb85",
    color_black: "#495057",
    color_red: "#F44E43",

    color_light_green: "#e3f7ed",
    light_gray: "#E5E5E5",

    color_green_chart: "#3dc54a",

    gray_50: "#F9FAFB",
    gray_300: "#D1D5DB",
    gray_500: "#6B7280",
    gray_900: "#111928",

    success: "#52c41a",
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#635BFF",
          colorBorder: "#EDE8FF",
        },
        components: {
          Table: {
            colorFillAlter: colors.color_white,
            borderRadius: 12,
            borderRadiusSM: 12,
            borderRadiusLG: 12,
            controlHeight: 40,
            colorText: colors.text_primary,
            colorBgContainer: colors.color_white,
            colorBorderSecondary: colors.color_input_border,
            fontSize: 16,
            fontWeightStrong: 500,
            padding: 20,
            paddingContentVerticalLG: 10,
            colorTextHeading: "#9D9EA0",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntConfigProvider;
