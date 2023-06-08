import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import Customtextinput from "../common/Customtextinput";
import Commonbutton from "../common/Commonbutton";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

let isvalid = true;
const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [badname, setBadName] = useState(false);
  const [email, setEmail] = useState("");
  const [bademail, setBademail] = useState(false);
  const [mobile, setMobile] = useState("");
  const [badmobile, setBadMobile] = useState(false);
  const [password, setpassword] = useState("");
  const [badpassword, setBadpassword] = useState(false);
  const [cpassword, setCpassword] = useState("");
  const [badcpassword, setBadCpassword] = useState(false);
  const [badmpassword, setBadmCpassword] = useState(false);
  const [diablebutton, setDisablebutton] = useState(false);
  let pass = "";

  const validate1 = () => {
    setDisablebutton(true);
    if (name == "") {
      setBadName(true);
      isvalid = false;
    } else {
      setBadName(false);
    }
    if (email == "") {
      setBademail(true);
      isvalid = false;
    } else {
      setBademail(false);
    }
    if (mobile == "") {
      setBadMobile(true);
      isvalid = false;
    } else {
      setBadMobile(false);
    }
    if (password == "") {
      setBadpassword(true);
      isvalid = false;
    } else {
      setBadpassword(false);
    }
    if (cpassword == "") {
      setBadCpassword(true);
      isvalid = false;
    } else {
      setBadCpassword(false);
    }

    if (password == cpassword) {
      setBadmCpassword(false);
    } else {
      setBadmCpassword(true);
      isvalid = false;
    }
   // setTimeout(() => {
      if (isvalid === true) {
        savedata();
        //navigation.goBack();
      } else {
        setDisablebutton(false);
      }
  //  }, 100);
  };

  const savedata = async () => {
    var InsertAPIURL = "http://192.168.87.179/api/SignUp.php"; //API to render signup

    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    var Data = {
      Name: name,
      Email: email,
      Mobile: mobile,
      Password: password,
    };

    // FETCH func ------------------------------------
    fetch(InsertAPIURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(Data), //convert data to JSON
    })
      .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
      .then(async (response) => {
        alert(response[0].Message); // If data is in JSON => Display alert msg
        await AsyncStorage.setItem("name", name);
        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("mobile", mobile);
        await AsyncStorage.setItem("password", password);
        navigation.goBack(); //Navigate to next screen if authentications are valid
      })
      .catch((error) => {
        alert("Error Occured " + error);
      });
  };

  return (
    <ScrollView style={{ flex: 1 }} showsHorizontalScrollIndicator={false}>
      <View style={{ flex: 1 }}>
        <Image
          source={require("../img/ecomm-logo.png")}
          style={{
            width: 90,
            height: 60,
            alignSelf: "center",
            marginTop: 100,
          }}
        />

        <Text
          style={{
            marginTop: 50,
            alignSelf: "center",
            fontSize: 27,
            fontWeight: "600",
            color: "#000",
          }}
        >
          Create new Account
        </Text>
        <Customtextinput
          placeholder={"Enter name"}
          icon={require("../img/email.jpg")}
          value={name}
          onChangeText={(txt) => {
            setName(txt);
          }}
        />
        {badname === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Please Enter name
          </Text>
        )}

        <Customtextinput
          placeholder={"Enter Email id"}
          icon={require("../img/email.jpg")}
          value={email}
          onChangeText={(txt) => {
            setEmail(txt);
          }}
        />
        {bademail === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Please Enter email
          </Text>
        )}

        <Customtextinput
          placeholder={"Enter Mobile No."}
          icon={require("../img/email.jpg")}
          type={"numeric"}
          value={mobile}
          onChangeText={(txt) => {
            setMobile(txt);
          }}
        />
        {badmobile === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Please Enter mobile no.
          </Text>
        )}

        <Customtextinput
          placeholder={"Enter Password"}
          type={"password"}
          icon={require("../img/lock.jpg")}
          value={password}
          onChangeText={(txt) => {
            setpassword(txt);
          }}
        />
        {badpassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Please Enter Password
          </Text>
        )}

        <Customtextinput
          placeholder={"Enter Conferm  Password"}
          type={"password"}
          icon={require("../img/lock.jpg")}
          value={cpassword}
          onChangeText={(txt) => {
            setCpassword(txt);
          }}
        />
        {badcpassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Please Enter Conferm Password
          </Text>
        )}
        {badmpassword === true && (
          <Text
            style={{
              marginTop: 10,
              marginLeft: 30,
              color: "red",
            }}
          >
            Password password did not matched
          </Text>
        )}

        <Commonbutton
          title={"Submit"}
          bgColor={diablebutton ? "#8e8e8e" : "#000"}
          textColor={"#fff"}
          onPress={() => {
            validate1();
          }}
          diablebutton={diablebutton}
        />
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            alignSelf: "center",
            marginTop: 20,
            textDecorationLine: "underline",
            marginBottom: 50,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          Already have an account?
        </Text>
      </View>
    </ScrollView>
  );
};
export default Signup;
