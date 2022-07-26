import { Block, Box, Img, Text, Title, Button } from './ModalOld.style';
import LogoPNG from './../../assets/logo.png';
import { useState } from 'react';

const ModalOld = () => {
    const [isShow, setShow] = useState(true);
    const closeWindow = () => {
        let new_window =
            window.open(window.location, '_self');

        // Close this window
        new_window.close();

        return false;
    }

    return (
        <>
            {isShow ? (
                <Box>
                    <Img src={LogoPNG} alt="logo" />
                    <Title>Проверка возроста</Title>
                    <Text>
                        DIPbaby - это сообщество для врозслых, в котором содержится контент с ограничением по
                        возросту.<br></br> Для регистрация вам должно быть не менее 18 лет.
                    </Text>
                    <Block>
                        <Button onClick={() => setShow(false)}>Вам есть 18 и больше</Button>
                        <Button onClick={() => window.location.href = 'https://www.google.com'}>Мне нет 18</Button>
                    </Block>
                </Box>
            ) : null
            }
        </>
    );
};

export default ModalOld;
