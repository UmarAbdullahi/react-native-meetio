import * as React from "react";
import { Dimensions, StyleSheet, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton, ScrollView } from "react-native-gesture-handler";

import {
  Box,
  Header,
  Icons,
  Text,
  Input,
  TabBar,
  theme,
} from "../../components";

const { width } = Dimensions.get("window");

const HeadersInputs = () => {
  const inputRef1 = React.useRef<TextInput>(null);
  const inputRef2 = React.useRef<TextInput>(null);
  const inputRef3 = React.useRef<TextInput>(null);
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const onFocus = (ref: React.RefObject<TextInput>) => {
    ref.current?.setNativeProps({
      borderBottomColor: theme.colors.darkBlueMagenta700,
      borderBottomWidth: 1,
    });
  };

  const onBlur = (ref: React.RefObject<TextInput>) => {
    ref.current?.setNativeProps({
      borderBottomColor: theme.colors.gray600,
      borderBottomWidth: StyleSheet.hairlineWidth,
    });
  };

  return (
    <Box backgroundColor="lightBlueMagenta100" width={width}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box width={width} height={200} marginBottom="l">
          <Box {...StyleSheet.absoluteFillObject} height={156} top={45}>
            <Header
              title={
                <Text variant="title1" style={{ marginLeft: 100 }}>
                  Activity
                </Text>
              }
              titleVariant="title1"
              backgroundColor="white"
              height={156}
              borderBottomLeftRadius={80}
              leftIcon={
                <Box marginLeft="m">
                  <RectButton onPress={goBack}>
                    <Icons.ArrowLeft />
                  </RectButton>
                </Box>
              }
              rightIcon={
                <Box marginRight="m">
                  <Icons.Filter />
                </Box>
              }
            />
          </Box>
          <Header
            title="HEADERS"
            titleVariant="title3"
            titleColor="darkBlueMagenta800"
            backgroundColor="lightBlueMagenta100"
            borderBottomLeftRadius={70}
          />
        </Box>
        <Header
          borderBottomLeftRadius={80}
          title={
            <Text variant="title1" color="white" style={{ marginLeft: 100 }}>
              Updates
            </Text>
          }
          titleColor="white"
          backgroundColor="darkBlueMagenta800"
          height={156}
          leftIcon={
            <Box marginLeft="m">
              <RectButton onPress={goBack}>
                <Icons.ArrowLeft strokeColor="white" />
              </RectButton>
            </Box>
          }
          rightIcon={
            <Box marginRight="m">
              <Icons.Search fillColor="white" />
            </Box>
          }
        />
        <Header marginTop="xl" height={48}>
          <TabBar tabs={["SIGN IN", "SIGN UP"]} />
        </Header>
        <Header marginTop="xl" height={48}>
          <TabBar tabs={["TODAY", "WEEK", "MONTH"]} />
        </Header>
        <Box marginTop="xl">
          <Text variant="title3" marginLeft="l">
            TEXTFIELDS
          </Text>
          <Input
            ref={inputRef1}
            padding="m"
            inputProps={{
              placeholder: "Name",
              onFocus: () => onFocus(inputRef1),
              onBlur: () => onBlur(inputRef1),
              style: {
                borderBottomColor: theme.colors.gray600,
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding: 5,
              },
            }}
          />
          <Input
            ref={inputRef2}
            padding="m"
            marginTop="m"
            inputProps={{
              placeholder: "Email",
              onFocus: () => onFocus(inputRef2),
              onBlur: () => onBlur(inputRef2),
              style: {
                borderBottomColor: theme.colors.gray600,
                borderBottomWidth: StyleSheet.hairlineWidth,
                padding: 5,
              },
            }}
          />
          <Input
            ref={inputRef3}
            padding="m"
            marginVertical="m"
            backgroundColor="darkBlueMagenta800"
            inputProps={{
              placeholder: "Group name",
              placeholderTextColor: "white",
              onFocus: () => {
                inputRef3.current?.setNativeProps({
                  borderBottomColor: theme.colors.lightBlueMagenta400,
                  borderBottomWidth: 1,
                });
              },
              onBlur: () => {
                inputRef3.current?.setNativeProps({
                  borderBottomColor: theme.colors.gray600,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                });
              },
              style: {
                padding: 10,
                borderBottomColor: theme.colors.gray600,
                borderBottomWidth: StyleSheet.hairlineWidth,
              },
            }}
          />
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HeadersInputs;
