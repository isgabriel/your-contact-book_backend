import { AppDataSource } from "./data-source";
import app from "./app";

AppDataSource.initialize()
    .then(() => {
        console.log("Database ruuning");
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    })
    .catch((error: any) => console.log(error));
