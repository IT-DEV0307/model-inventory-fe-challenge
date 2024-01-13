export interface ModelType {
    model_version: number; 
    ts_start: number; 
    ts_end: number; 
    num_categorical: number; 
    job_id: string; 
    model_type: string; 
    num_continuous: number; 
    model_name: string; 
    sk: string; 
    ts_updated: number; 
    pk?: string; 
}