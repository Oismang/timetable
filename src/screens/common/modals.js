import React from 'react';
import AppModal from "../../components/appmodal/AppModal";
import { formatDate } from "../../utils/common";

export const AddModal = ({ isVisible, setIsVisible, currentDate }) => (
  <AppModal isVisible={isVisible}
    setIsVisible={setIsVisible}
    title={formatDate(currentDate)}
  >
    <AppModal.Item text={"Добавить напоминание"} />
    <AppModal.Item text={"Добавить событие"} />
  </AppModal>
)