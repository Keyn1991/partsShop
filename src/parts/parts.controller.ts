// src/parts/parts.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PartsService } from './parts.service';
import { Part } from './parts.entity';

@Controller('parts')
export class PartsController {
    constructor(private readonly partsService: PartsService) {}

    @Get()
    findAll(): Promise<Part[]> {
        return this.partsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Part> {
        return this.partsService.findOne(id);
    }

    @Post()
    create(@Body() part: Partial<Part>): Promise<Part> {
        return this.partsService.create(part);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updateData: Partial<Part>): Promise<Part> {
        return this.partsService.update(id, updateData);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<void> {
        return this.partsService.delete(id);
    }

    @Post(':id/purchase')
    purchase(@Param('id') id: number, @Body('quantity') quantity: number): Promise<Part> {
        return this.partsService.purchase(id, quantity);
    }
}