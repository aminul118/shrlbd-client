export type TChildren = Readonly<{
  children: React.ReactNode;
}>;


export type TServices = {
  id: number;
  photo: string;
  service_name: string;
  description: string;
  features_name: string;
  features: string[];
};