import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { StudentService } from "src/user/services/student.service";
import { StudentRegistrationDto } from "../dto/student-registration.dto";
import { ApiResponse } from "@nestjs/swagger";
import { StudentDto } from "../dto/student.dto";
import { StudentPatchDto } from "../dto/student.patch.dto";


@Controller('students')
export class StudentController {
    constructor(private service: StudentService){}

    @Post()
    create(@Body() student: StudentRegistrationDto){
        this.service.create(student)
    }

    @Get()
    @ApiResponse({
        type: [StudentDto]
    })

    findAll():StudentDto[] {
        return this.service.findAll()
    }

    @Patch(':id/:field')
    patchStudent(@Param('id') id: string, @Body() patchDto:StudentPatchDto){
        this.service.patch(id, patchDto.field, patchDto.value);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string){
        this.service.delete(id);
    }

}