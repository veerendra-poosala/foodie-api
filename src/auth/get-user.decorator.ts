import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "./user.entity";
import { UserCredintialsDto } from "./dtos/user-credintials.dto";

export const GetUser = createParamDecorator((_data, ctx:ExecutionContext)=>{
    const req = ctx.switchToHttp().getRequest();
    return req?.user;
});