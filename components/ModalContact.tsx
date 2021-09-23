import styles from "../styles/Home.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  FormErrorMessage,
  Grid,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Client } from "../models/clients";

interface ModalContact {
  isOpen: boolean;
  onClose: () => void;
}
const validationSchema = Yup.object().shape({
  name: Yup.string().required("El nombre es requerido"),
  lastname: Yup.string().required("El apellido es requerido"),
  org: Yup.string(),

  email: Yup.string()
    .required("El correo electronico es requerido")
    .email("Ingrese un correo electronico valido"),
  msg: Yup.string()
    .required("El mensaje es requerido")
    .min(25, "Escribe almenos 25 caracteres"),
});
const formOptions = { resolver: yupResolver(validationSchema) };
const ModalContact = ({ isOpen, onClose }: ModalContact) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const onSubmit = async (data: any, e: any) => {
    setLoading(true);

    try {
      const body = {
        name: data.name,
        lastname: data.lastname,
        email: data.email,
        company: data.org,
        message: data.msg,
      };
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body),
      });
      setLoading(false);
      onClose();
      toast({
        title: "Mensaje enviado correctamente.",
        description: "Nos contactaremos en la brevedad.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      reset();
    } catch (err) {
      setLoading(false);
      toast({
        title: "Hubo un error en el envio del mensaje",
        description: "Revisa los contenidos enviados",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contacto</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <Box rowSpan={2} colSpan={1}>
                  <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name">Nombre</FormLabel>
                    <Input
                      id="name"
                      placeholder="Nombre"
                      {...register("name")}
                    />

                    <FormErrorMessage>
                      {errors.name && errors.name.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.lastname}>
                    <FormLabel htmlFor="lastname">Apellido</FormLabel>
                    <Input
                      id="lastname"
                      placeholder="Apellido"
                      {...register("lastname")}
                    />
                    <FormErrorMessage>
                      {errors.lastname && errors.lastname.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
                <Box rowSpan={2} colSpan={1}>
                  <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor="email">Correo Electronic</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Correo Electronico"
                      {...register("email")}
                    />
                    <FormErrorMessage>
                      {errors.email && errors.email.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={errors.org}>
                    <FormLabel htmlFor="org">Empresa</FormLabel>
                    <Input
                      id="org"
                      type="text"
                      placeholder="Empresa"
                      {...register("org")}
                    />
                    <FormErrorMessage>
                      {errors.org && errors.org.message}
                    </FormErrorMessage>
                  </FormControl>
                </Box>
              </Grid>

              <FormControl isInvalid={errors.msg}>
                <FormLabel htmlFor="msg">Mensaje</FormLabel>
                <Textarea
                  id="msg"
                  type="text"
                  placeholder="Mensaje"
                  {...register("msg")}
                />
                <FormErrorMessage>
                  {errors.msg && errors.msg.message}
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <div className={`${styles.containerContact}`}>
                <Button
                  colorScheme="teal"
                  isLoading={loading}
                  type="submit"
                  loadingText="Enviando"
                >
                  Enviar
                </Button>
              </div>
              <Button
                onClick={() => {
                  onClose();
                  reset();
                }}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalContact;
