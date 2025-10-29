import { ApiProperty } from "@nestjs/swagger";

export class StudentDto {
    @ApiProperty()
    id: Number;
    @ApiProperty()
    fullName: string;
    @ApiProperty()
    idNumber: string;
    @ApiProperty()
    email: string;
}