import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entities";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    phone: number;

    @Column({ type: "date" })
    registerDate: string | Date;

    @ManyToOne(() => User)
    user: User;
}

export { Contact };
