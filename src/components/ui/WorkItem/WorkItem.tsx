import Badge from "@/components/base/Badge/Badge";
import btn from "@/styles/button.module.scss";
import { type WorkItemType } from "@/types/WorkItemType";
import { GithubLogo, ShareFat } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import style from "./WorkItem.module.scss";

type WorkItemProps = {
	/**
	 * Work item to be displayed
	 */
	workItem: WorkItemType;
	/**
	 * Reverse the order of the image and the content
	 */
	reverse?: boolean;
};

export default function WorkItem({ workItem, reverse }: WorkItemProps) {
	return (
		<article className={`${style.wrapper} ${reverse ? style.reverse : ""}`}>
			<h2 className={style.title}>{workItem.title}</h2>
			<Image
				className={style.image}
				src={workItem.image}
				alt={`Screenshot of the project: ${workItem.title}`}
				height={300}
				width={600}
			/>
			<div className={style.badges}>
				{workItem.stack.map((stackItem) => (
					<Badge
						color={stackItem.color}
						icon={stackItem.icon}
						key={`${workItem.title}-${stackItem.name}`}
					>
						{stackItem.name}
					</Badge>
				))}
			</div>
			<div className={style.description}>{workItem.description}</div>
			<div className={style.cta}>
				{workItem.github ? (
					<Link
						className={`${btn.button} ${btn.secondary} ${btn.square}`}
						href={workItem.github}
						target="_blank"
					>
						<GithubLogo size={32} />
					</Link>
				) : null}
				{workItem.demo ? (
					<Link
						className={`${btn.button} ${btn.square}`}
						href={workItem.demo}
						target="_blank"
					>
						<ShareFat size={32} />
					</Link>
				) : null}
			</div>
		</article>
	);
}
