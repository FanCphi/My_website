export type ProjectStatus = "active" | "completed" | "paused";

export interface Project {
  id: string;
  name: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  active: "进行中",
  completed: "已完成",
  paused: "暂停",
};

export const statusColors: Record<ProjectStatus, string> = {
  active: "bg-green/10 text-green",
  completed: "bg-blue/10 text-blue",
  paused: "bg-orange/10 text-orange",
};
