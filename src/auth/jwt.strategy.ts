import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import typeOrmConfig from "ormconfig";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from "./user.entity";
import { JwtPayload } from "./interfaces/jwt.interface";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            secretOrKey: 'secret',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        })
    }

    private usersRepository = typeOrmConfig.getRepository(User);

    async validate(payload: JwtPayload){
        const {username} = payload;
        const user: User = await this.usersRepository.findOne({where: {username}});
        
        if(!user){
            throw new UnauthorizedException();
        }
        return user;

    }
}