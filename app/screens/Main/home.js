/* eslint-disable prettier/prettier */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomePage = () => {
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('PredictDisease');
  };

  const handleChat = () => {
    navigation.navigate('DocChat');
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
  };

  const handleText1Click = () => {
    const websiteUrl = 'https://en.wikipedia.org/wiki/Common_cold';
    Linking.openURL(websiteUrl);
  };

  const handleText2Click = () => {
    const websiteUrl = 'https://www.cdc.gov/flu/symptoms/symptoms.htm';
    Linking.openURL(websiteUrl);
  };
  const handleText3Click = () => {
    const websiteUrl = 'https://en.wikipedia.org/wiki/COVID-19';
    Linking.openURL(websiteUrl);
  };

  const handleText4Click = () => {
    const websiteUrl = 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiyj9qyvOD_AhUqmGYCHZSDCpgYABAAGgJzbQ&ohost=www.google.com&cid=CAESa-D2kCKfSVa-VBAq1wr7Ll8rY2DD8N-t9V3DkwDwf_QuX0VMmZnOWC72JmBbVS7cryvOqVcuDjm44mXbV2DTaUqKXWJjkDwjldfYomQry3MCBytGIMOoXUC4QsSdzh3R5M7kqkVX10cI_pL9&sig=AOD64_0ynu1K1fF8J5fkzurTD8Pc9iZWfg&q&adurl&ved=2ahUKEwiw6NKyvOD_AhUY2TgGHWW5C4sQ0Qx6BAgGEAEd';
    Linking.openURL(websiteUrl);
  };

  const handleText5Click = () => {
    const websiteUrl = 'https://en.wikipedia.org/wiki/Hepatitis';
    Linking.openURL(websiteUrl);
  };

  const handleText6Click = () => {
    const websiteUrl = 'https://dndi.org/diseases/dengue/facts/?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJtr7-n0vUiaxYrB67zu3tKLlyB4Lbx6G_T8WsE8gON5n3QoD8S-LEcaAphJEALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText7Click = () => {
    const websiteUrl = 'https://en.wikipedia.org/wiki/Avian_influenza';
    Linking.openURL(websiteUrl);
  };

  const handleText8Click = () => {
    const websiteUrl = 'https://www.who.int/health-topics/severe-acute-respiratory-syndrome#tab=tab_1';
    Linking.openURL(websiteUrl);
  };

  const handleText9Click = () => {
    const websiteUrl = 'https://www.who.int/news-room/fact-sheets/detail/zika-virus?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJucKpASPbuvpceoRR35QPL_ofUdqqlw752uFgl-M-64SL2N899qFCAaAqSbEALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText10Click = () => {
    const websiteUrl = 'https://www.who.int/news-room/fact-sheets/detail/nipah-virus';
    Linking.openURL(websiteUrl);
  };

  const handleText11Click = () => {
    const websiteUrl = 'https://www.who.int/news-room/questions-and-answers/item/malaria?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJsE9YSMyYlK45IADDyl3XvCzjp2Nh5dtGjlhi_iKlP2Nr7U0AnQ1eIaAgNHEALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText12Click = () => {
    const websiteUrl = 'https://www.who.int/news-room/fact-sheets/detail/cholera?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJt2LWUy_a4V5CeZ8MjX_gSr-iXnvYg3hzDGjI35drNr8HAgGD2DL64aAvq6EALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText13Click = () => {
    const websiteUrl = 'https://www.who.int/news-room/fact-sheets/detail/measles?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJsps18OrTROg4gE54_JmHuPmgTmzeaHwjIescjnqctYaB7BRNl7hX8aArKAEALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText14Click = () => {
    const websiteUrl = 'https://www.gavi.org/vaccineswork/next-pandemic/yellow-fever?gclid=Cj0KCQjw7uSkBhDGARIsAMCZNJuxVzIKf8Bu5hPzAwg_xSKYoHSU60PmI_KfTAfrTlqX5Jkejes3vlcaAidOEALw_wcB';
    Linking.openURL(websiteUrl);
  };

  const handleText15Click = () => {
    const websiteUrl = 'https://www.mayoclinic.org/diseases-conditions/flu/symptoms-causes/syc-20351719';
    Linking.openURL(websiteUrl);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text style={styles.heading}>Welcome to the ID-Doctor </Text>
      <Text style={styles.heading2}> Infectious Disease Prediction App </Text>
      <Image source={require('../../assets/Home3.png')} style={styles.Image} />

      <View style={styles.section1}>
        <Text style={styles.sectionText1}>
          This app is designed to help predict infectious diseases based on the symptoms provided by the user.
          It utilizes a machine learning algorithm to analyze the symptoms and provide a prediction.
          Please provide accurate and detailed information for the best prediction results.
        </Text>
      </View>

        <View style={styles.section2}>
          <Text style={styles.sectionHeading2}>Instructions</Text>
          <Text style={styles.sectionText2}>
            1. Enter your symptoms in the Symptoms page.
            {'\n'}
            2. Provide any additional notes or information regarding your symptoms.
            {'\n'}
            3. The app will analyze the data and provide a prediction for the infectious disease.
            {'\n'}
            4. The prediction will be displayed on the Results page along with any additional information or recommendations.
          </Text>
        </View>

        <Image source={require('../../assets/Disease.png')} style={styles.Image2} />
        <View style={styles.section3}>
          <Text style={styles.sectionHeading3}>These are the Infectious Disease Predicted by this app.</Text>
          <View style={styles.section3View}>
            <Text style={styles.sectionText3}>
              <Text onPress={handleText1Click}>  ● Common cold {'\n'} </Text>
              <Text  onPress={handleText2Click}> ● Normal flu {'\n'} </Text>
              <Text onPress={handleText3Click}> ● Covid-19 {'\n'} </Text>
              <Text onPress={handleText4Click}> ● Monkeypox {'\n'} </Text>
              <Text onPress={handleText5Click}> ● Hepatitis {'\n'} </Text>
              <Text onPress={handleText6Click}> ● Dengue  </Text>
            </Text>
            <Text style={styles.sectionText3}>
              <Text onPress={handleText7Click}>  ● Bird Flu {'\n'} </Text>
              <Text onPress={handleText8Click}> ● SARS {'\n'} </Text>
              <Text onPress={handleText9Click}> ● Zika {'\n'} </Text>
              <Text onPress={handleText10Click}> ● Nipah {'\n'} </Text>
              <Text onPress={handleText11Click}> ● Malaria {'\n'} </Text>
              <Text onPress={handleText12Click}> ● Cholera {'\n'} </Text>
              <Text onPress={handleText13Click}> ● Measles {'\n'} </Text>
              <Text onPress={handleText14Click}> ● Yellow Flu {'\n'} </Text>
              <Text onPress={handleText15Click}> ● Influenza </Text>
            </Text>
            <Text style={styles.LastText}>Do you want know more details about infectious diseases, Click on Disease Name. </Text>
          </View>
          <Image source={require('../../assets/Chat.jpg')} style={styles.Image3} />
        </View>

      </ScrollView>
      <View style = { styles.IconContainer}>
        <TouchableOpacity onPress={handleSearch}>
          <Image source={require('../../assets/SearchIcon.png')} style={styles.Icon1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleChat}>
          <Image source={require('../../assets/ChatIcon.png')} style={styles.Icon2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProfile}>
          <Image source={require('../../assets/Person.png')} style={styles.Icon3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  IconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: '#89CFF0',
    width: 340,
    height: 65,
    marginLeft: 32,
    borderRadius :50,
  },
  Icon1: {
    width: 40,
    height: 40,
  },
  Icon2: {
    width: 40,
    height: 40,
  },
  Icon3: {
    width: 40,
    height: 40,
  },
  contentContainer: {
    flexGrow: 1,
    top: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    bottom: 5,
    textAlign: 'center',
    color: '#00008B',
  },
  heading2: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  Image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
    top: -30,
    marginLeft: 25,
  },
  section1: {
    marginBottom: 24,
    padding: 8,
  },
  sectionText1: {
    fontSize: 16,
    top: -60,
    textAlign: 'justify',
    color: 'black',
  },
  section2: {
    marginBottom: 24,
    padding: 8,
  },
  sectionHeading2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    top: -70,
    color: 'black',
    backgroundColor: 'yellow',
    width: 110,
  },
  sectionText2: {
    fontSize: 16,
    top: -70,
    color: 'black',
    textAlign: 'justify',
  },
  Image2: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: -130,
  },
  Image3: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    top: -100,
  },
  section3: {
    marginBottom: 24,
    padding: 8,
    marginTop: -50,
  },
  sectionText3: {
    fontSize: 18.5,
    marginBottom: 20,
    paddingLeft: 25,
    color: 'black',
  },
  sectionHeading3: {
    marginTop: -120,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontStyle: 'italic',
  },
  LastText: {
    color: 'brown',
    fontSize: 15,
    textAlign: 'justify',
    marginBottom: 10,
  },

});

export default HomePage;

