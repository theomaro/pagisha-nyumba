import { View, Text, ImageSourcePropType, Image } from "react-native";

const TabIcon = ({
  name,
  icon,
  color,
  focused,
}: {
  name: string;
  icon: ImageSourcePropType | undefined;
  color: string;
  focused: boolean;
}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon} resizeMode="contain" className="w-5 h-5" />

      <Text
        className={`${focused ? "font-bold" : "font-normal"} text-sm`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
