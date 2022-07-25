import { Block, Box, Img, Text, Title } from "./ModalOld.style"
import LogoPNG from './../../assets/logo.png';
import { useState } from "react";

const ModalOld = () => {
    const [isShow, setShow] = useState(true);

    return (
        <>
        {isShow ? (
            <Box>
                <Img src={LogoPNG} alt='logo' />
                <Title>Проверка возроста</Title>
                <Text>DIPbaby - это сообщество для врозслых, в котором содержится контент с ограничением по возросту.<br></br> Для регистрация вам должно быть не менее 18 лет.</Text>
                <Block></Block>
            </Box>) : null}
            </>)
}

export default ModalOld;