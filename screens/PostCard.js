import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";

export default class CreateStory extends Component {
    render() {
        return (
            <View style={styls.container}>
                <View style={styles.cardCOntainer}>
                    <View style={styles.authorConatiner}>
                        <View style={styles.authorImageContainer}>
                            <Image 
                                source={require("../assets/profile_img.png")}
                                style={styles.profileImage}
                            </Image >  
                                
                        </View>
                        <View style={styles.authorNameContainer}> 
                            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
                        </View> 
                    </View>
                    <View style={styles.captionConatiner}>
                        <Text style={styles.captionText}>
                            {this.props.post.caption}
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                            <Text style={styles.likeText}>12k</Text>
                        </View>
                </View>
            </View>
        )
    }
}