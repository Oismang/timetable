import React from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { BLUE, DARK_BLUE, LIGHT_SILVER } from '../../constants/colors';
import { screenWidth } from '../../constants/sizes';
import AppText from '../apptext/AppText';

const AppModal = ({ isVisible = false, setIsVisible, children, title }) => {

  const renderModalContent = () => (
    <View style={styles.modalContent}>
      {
        title &&
        <View style={styles.modalHeader}>
          <AppText style={styles.modalHeaderText}>{title}</AppText>
        </View>
      }
      {children}
    </View>
  )

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        visible={isVisible}
        transparent>
        <TouchableOpacity
          style={{ ...styles.overlay, ...styles.centeredView }}
          onPress={() => setIsVisible(false)}
          activeOpacity={1}>

          {renderModalContent()}

        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const Item = ({ text, onPress }) => (
  <TouchableOpacity style={styles.modalItem} onPress={onPress}>
    <AppText>{text}</AppText>
  </TouchableOpacity>
);
AppModal.Item = Item;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, .6)'
  },
  modalContent: {
    width: screenWidth * 0.8,
    backgroundColor: BLUE,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalHeader: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: LIGHT_SILVER,
    padding: 15,
    alignItems: "center"
  },
  modalHeaderText: {
    fontWeight: "700",
    color: DARK_BLUE,
  },
  modalItem: {
    padding: 15,
    paddingLeft: 20,
    borderColor: DARK_BLUE,
    borderStyle: "solid",
    borderTopWidth: 3
  }
});

export default AppModal;