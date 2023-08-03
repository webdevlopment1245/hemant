/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  timestamp: Date;

  @Prop()
  ChallanNo: string;

  @Prop()
  AnalyticsId: string;

  @Prop()
  Status: string;

  @Prop({ type: String, required: false })
  Priority: string;

  @Prop({ type: String, required: false })
  CameraName: string;

  @Prop({ type: String, required: false })
  CustomerName: string;

  @Prop({ type: String, required: false })
  Location: string;

  @Prop({ type: String, required: false })
  Lat: string;

  @Prop({ type: String, required: false })
  Long: string;

  @Prop({ type: Number, required: false })
  Speed: number;

  @Prop({ type: String, required: false })
  EventType: string;

  @Prop({ type: String, required: false })
  LPNumber: string;

  @Prop({ type: String, required: false })
  SnapshotURL: string;

  @Prop({ type: String, required: false })
  LPImageURL: string;

  @Prop({ type: String, required: false })
  vehicleRegistrationNumber: string;

  @Prop({ type: Boolean, required: false })
  IsChallangenerated: boolean;

  @Prop({ type: String, required: false })
  RLVDImageURL: string;

  @Prop({ type: String, required: false })
  VideoURL: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
