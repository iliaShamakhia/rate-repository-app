import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding:10,
      flexDirection: 'row',
      flexGrow: 1,
      flexShrink: 1
    },
    bold:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10
    },
    stats: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft:20,
        paddingRight:20,
        paddingTop:5,
        paddingBottom:10
        
    },
    textCenter:{
        textAlign:"center",
        color: 'grey',
        fontSize: 16
    },
    description:{
        color: 'grey',
        fontSize: 16,
        marginBottom:15
    },
    boldTextCenter:{
        fontSize:16,
        fontWeight:"bold",
        textAlign:"center"
    },
    language:{
        color:'#ffffff',
        backgroundColor: '#0366d6',
        fontSize:16,
        borderRadius:5,
        padding:4
    },
    languageCon:{
        
    },
    info: {
      paddingLeft:20,
      flexGrow: 1,
      flexShrink: 1
    }
  });

const RepositoryItem = ({item}) => {
    return (
        <View>
            <View style={styles.container}>
                <Image style={{width:55,height:55,borderRadius:5}} source={{uri:item.ownerAvatarUrl}}/>
                <View style={styles.info}>
                    <Text style={styles.bold}>{item.fullName}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.languageCon}>
                        <Text style={styles.language}>{item.language}</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.stats}>
                <View>
                    <Text style={styles.boldTextCenter}>{(item.stargazersCount/1000).toFixed(1)+'k'}</Text>
                    <Text style={styles.textCenter}>Stars</Text>
                </View>
                <View>
                    <Text style={styles.boldTextCenter}>{(item.forksCount/1000).toFixed(1) + 'k'}</Text>
                    <Text style={styles.textCenter}>Forks</Text>
                </View>
                <View>
                    <Text style={styles.boldTextCenter}>{item.reviewCount}</Text>
                    <Text style={styles.textCenter}>Reviews</Text>
                </View>
                <View>
                    <Text style={styles.boldTextCenter}>{item.ratingAverage}</Text>
                    <Text style={styles.textCenter}>Rating</Text>
                </View>
            </View>
        </View>
    ); 
};

export default RepositoryItem;