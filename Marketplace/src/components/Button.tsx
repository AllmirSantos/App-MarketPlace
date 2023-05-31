import {
  Button as ButtonNativeBase,
  IButtonProps,
  Heading,
  Icon,
} from "native-base";

type Props = IButtonProps & {
  title: string;
  variant?: "solid" | "outline";
};

import { AntDesign } from "@expo/vector-icons";

export function ButtonNative({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h="48px"
      bg={variant === "outline" ? "gray.5" : "blue.100"}
      borderWidth={variant === "outline" ? 1 : 0}
      borderColor="transparent"
      rounded="sm"
      _pressed={{
        bg: variant === "outline" ? "blue.100" : "blue.200",
      }}
      {...rest}
    >
      <Heading
        color={variant === "outline" ? "gray.2" : "white"}
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}

export function ButtonBlack({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h="48px"
      bg={"gray.1"}
      borderColor="transparent"
      rounded="sm"
      _pressed={{
        bg: "blue.200",
      }}
      {...rest}
    >
      <Heading color={"white"} fontFamily="heading" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}

export function ButtonBlackAdd({ title, variant = "solid", ...rest }: Props) {
  return (
    <ButtonNativeBase
      leftIcon={<AntDesign name="plus" size={17} color="#ffffff" />}
      w="full"
      h="48px"
      bg={"gray.1"}
      borderColor="transparent"
      rounded="sm"
      _pressed={{
        bg: "blue.200",
      }}
      {...rest}
    >
      <Heading color={"white"} fontFamily="heading" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}
