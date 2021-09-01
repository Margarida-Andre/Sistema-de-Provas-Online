import * as yup from "yup";

  export const validations = yup.object().shape({
    nome: yup.string().min(3, "Digite o seu nome maior, por favor!").required("Digite o seu nome, por favor!"),
    email: yup.string().email().required("Digite o email, por favor!"),
    senha: yup.string().min(8, "Digite uma senha maior, por favor!").max(9, "Esta senha é muito longa!").required("Digite a senha, por favor!"),
    rua: yup.string().min(4, "Digite uma rua maior, por favor!").required("Digite a rua, por favor!"),
    provincias: yup.string().required("Selecciona uma província, por favor"),
    generos: yup.string().required("Digite o gênero, por favor!"),
    municipios: yup.string().required("Selecciona um município, por favor"),
    distritos: yup.string().required("Selecciona um distrito urbano, por favor"),
    titulo: yup.string().required("Digite o título, por favor!"),
    horaF: yup.string().required("Digite a hora final, por favor"),
    horaI: yup.string().required("Digite a hora inicial, por favor"),
    data: yup.string().required("Digite a data, por favor")
});
