import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('D:\code\MoodQuest\assets\download.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Welcome to My App</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        {/* Featured Items */}
        <TouchableOpacity style={styles.featuredItem}>
          {/* <Image
            source={require('./assets/download.jpeg')}
            style={styles.itemImage}
            resizeMode="cover"
          /> */}
          <Text style={styles.itemTitle}>Item 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featuredItem}>
          {/* <Image
            source={require('./assets/download.jpeg')}
            style={styles.itemImage}
            resizeMode="cover"
          /> */}
          <Text style={styles.itemTitle}>Item 2</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Search</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainContent: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  featuredItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  navItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomePage;
