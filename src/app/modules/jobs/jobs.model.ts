import { Schema, model, Document } from 'mongoose';

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  category?: string;
  salary: string;
  job_type: string;
  company_logo: string;
  description?: string;
  created_at: Date;
}

const jobSchema = new Schema<IJob>({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  category: { type: String , required: false },
  salary: { type: String, required: true },
  job_type: { type: String, required: true },
  company_logo: { type: String, required: true },
  description: { type: String , required: false },
  created_at: { type: Date, default: Date.now },
});

export const Job = model<IJob>('Job', jobSchema);
