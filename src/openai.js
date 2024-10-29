import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY, // Carrega a chave da API do arquivo .env
});

const openai = new OpenAIApi(configuration);

export default openai;
