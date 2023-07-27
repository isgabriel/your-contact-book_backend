import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.entities";

@Entity("contacts")
class Contact {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", length: 256, nullable: false })
    name: string;

    @Column({ type: "varchar", length: 256, unique: true, nullable: false })
    email: string;

    @Column({ type: "varchar", length: 20, nullable: false })
    phone: string;

    @CreateDateColumn({ type: "date" })
    registerDate: string;

    @ManyToOne(() => User, (user) => user.contacts)
    user: User;
}

export { Contact };
