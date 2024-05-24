import { useEffect, useState } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {
    starWarsCharactersData, 
    matchesData, 
    UserDataType, 
    MatchDataType 
} from "../utilties/res/data";
import { 
    ROUTE,
    addTotalScoreForEachPlayer, 
} from "../utilties/utils";

export const PointScreen = ({navigation}: any) => {

    const [userData, setUserData] = useState<UserDataType[]>(starWarsCharactersData);
    const [matchData, setMatchData] = useState<MatchDataType[]>(matchesData);

    useEffect(()=> {
        //prepare the userData
        setUserData(
            addTotalScoreForEachPlayer(
                userData, 
                matchData
            )
        )
    }, [])

    type RenderUserCardType = {
        index: number,
        item: UserDataType
    }

    const renderMatchCards = ({item, index}: RenderUserCardType) => {
        return (
            <>
                <View style={styles.renderUserCardContainer}>
                    <TouchableOpacity 
                        style={styles.renderUserCardContainer1}
                        onPress={()=> {
                            navigation.navigate(ROUTE.MATCHES, {
                                userId: item?.id,
                                matchData: matchData,
                                userData: userData
                            });
                        }}
                    >
                        <View>
                            <View style={styles.renderUserCardContainer2}>
                                 <Image
                                    style={styles.logo}
                                    source={{
                                        uri: `${item?.icon}`
                                    }}
                                />
                                <View style={{width: 16}}></View>
                                <View style={styles.scoreContainer}>
                                    <Text style={styles.textStyle}>
                                        {item?.name}
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.scoreContainer}>
                            {
                                <Text style={styles.textStyleScore}>
                                    {item?.totalScore}
                                </Text>
                            }
                        </View>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    const renderDivider = ()  => (
        <View style={styles.divider}></View>
    )

    return (
        <View>
            <FlatList 
                data={userData}
                renderItem={renderMatchCards}
                scrollEnabled={true}
                ItemSeparatorComponent={renderDivider}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    renderUserCardContainer: {

    },
    logo: {
        width: 70,
        height: 70
    },
    textStyle: {
        fontSize: 14,
        color: 'black',
        fontWeight: "600",
    },
    textStyleScore: {
        fontSize: 20,
        fontWeight: "600",
        color: 'black'
    },
    scoreContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    divider: {
        borderWidth: 0.5,
        borderColor: '#BBC4D5'
    },
    renderUserCardContainer1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16
    },
    renderUserCardContainer2: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});