import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entities";

@Entity("users")
class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    phone: number;

    @Column({ type: "date" })
    registerDate: string | Date;

    @OneToMany(() => Contact, (contact) => contact.user)
    contacts: Contact[];
}

export { User };
