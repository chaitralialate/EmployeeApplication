// import React, { Component,useState } from 'react'
// import { Text, View,StyleSheet, Alert,Image,Dimensions,SafeAreaView } from 'react-native'
// import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import {Birlasoft} from '../server/db.json';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import * as api from '../API';


// export default class EmpList extends Component {    
//     constructor(props){
//         super(props)
//         this.state={};
//     }

    
//     deleteRequest = (id) => {
//     api.deleteCall(id).then(function (response) {
//       console.log(response.data);
//     })
//       .catch(function (error) {
//         console.log(error)
//       })
//   }

//     renderData = ({item,navigation}) => {
//         return(
//             <View style={styless.card}>
//                 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                
//                     <Text style={{color:'black',padding:12}}>{item.id}{' | '}{item.name}{' | '}{item.designation}{' | '}{item.shift}</Text>        
                
//                 <View style={{flexDirection:'row',padding:12,justifyContent:'space-between'}}>
//                     <FontAwesome5 color='black' size={20} name={'pencil-alt'}  onPress={() => ModalOpen()} />
//                     <FontAwesome5 color='black' size={20} name={'trash'} onPress={() => deleteRequest(item.id)}/>
                  
//                 </View>
                   
//                 </View>
//             </View>
//         )
//     }
    
//     render() {
//         return (
//             <View style={{backgroundColor:'#97DDA7'}}>
//             <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
//                 <Text style={{color:'black'}}> All Employees </Text>
//             </View>
//             <View>
//                 <FlatList
//                     data={Birlasoft}
//                     renderItem={this.renderData}
//                     keyExtractor={item=>item.id}
//                 />
//             </View>
//             </View>
//         )
//     }
// }
// const styless = StyleSheet.create({
//     card: {
//         backgroundColor:'#FEF8',
//         marginBottom:10,
//         marginLeft:'2%',
//         width:'96%',
//         height: 50,
//         borderRadius:10,
//         shadowColor:'#000',
//         shadowOpacity:0.2,
//         shadowRadius:1,
//         shadowOffset:{
//             width:3,
//             height:3
//         }
//     },
// })





//Try for update
import React, { Component,useState } from 'react'
import { Text, View,StyleSheet, Alert,Image,Dimensions,SafeAreaView,Modal,Button } from 'react-native'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {Birlasoft} from '../server/db.json';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as api from '../API';


export default class EmpList extends Component {    
    constructor(props){
        super(props)
        this.state={modalVisible: false,text:'',text1: '',text2: '',number:null};
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
        
    }

    ShowModal () {
        const { modalVisible } = this.state;
   

      return(
         
          <Modal visible={this.state.modalVisible} transparent={true}>
            <View style={{backgroundColor:"#000000aa",flex:1}}>
            <View style={{margin:50,backgroundColor:"#FFE5B4",flex:1,borderRadius:8,padding:10}}>

        <TextInput
          style={{height: 60}}
          placeholder=""
          caretHidden
          onChangeText={(number) => this.setState({number})}
          value={this.state.number}
        />

        <TextInput
          style={{height: 60}}
          placeholder="Employee name"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />

        <TextInput
          style={{height: 60}}
          placeholder="Employee designation"
          onChangeText={(text1) => this.setState({text1})}
          value={this.state.text1}
        />

        <TextInput
          style={{height: 60}}
          placeholder="Shift"
          onChangeText={(text2) => this.setState({text2})}
          value={this.state.text2}
        />

              
              <Button onPress={()=>{this.setState({modalVisible:false})} }  title="OK"/>
            </View>
            </View>
          </Modal>
         
      )
      
    
      }

  deleteRequest = (id) => {
    api.deleteCall(id).then(function (response) {
      console.log(response.data);
    })
      .catch(function (error) {
        console.log(error)
      })
  }

  putRequest = (id, name, designation, shift) => {
    api.updateCall(id, name, designation, shift).then(function (response) {
      console.log(response.data);
    })
      .catch(function (error) {
        console.log(error)
      })
  }

    renderData = ({item,navigation}) => {
        return(
            <View style={styless.card}>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                
                    <Text style={{color:'black',padding:12}}>{item.id}{' | '}{item.name}{' | '}{item.designation}{' | '}{item.shift}</Text>        
                
                <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
              
                    <FontAwesome5 color='black' size={25} name={'pencil-alt'} onPress={()=>{this.setModalVisible(true)}} />
                    {/* <FontAwesome5 color='black' size={25} name={'pencil-alt'} onPress={() =>console.log ("updated")} /> */}
                    <FontAwesome5 color='black' size={20} name={'trash'} onPress={() => deleteRequest(item.id)}/>
                  
                </View>
                   
                </View>
            </View>
        )
    }
    
    render() {
        return (
            <View style={{backgroundColor:'#97DDA7'}}>
            <View style={{justifyContent:'center',alignItems:'center',padding:10}}>
                <Text style={{color:'black'}}> All Employees </Text>
            </View>
            <View>
                <FlatList
                    data={Birlasoft}
                    renderItem={this.renderData}
                    keyExtractor={item=>item.id}
                />
            </View>
            {this.ShowModal()}
            
            </View>
        )
    }
}
const styless = StyleSheet.create({
    card: {
        backgroundColor:'#FEF8',
        marginBottom:10,
        marginLeft:'2%',
        width:'96%',
        height: 50,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
    },
})

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

