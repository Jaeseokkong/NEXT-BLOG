import Divider from "@/components/atoms/Divider";
import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
import Link from "next/link";
import { LuGithub, LuLaptop, LuMail, LuSmartphone } from "react-icons/lu";

export default function ResumeHeader() {
	return (
		<header className="mb-8 flex space-x-10">
			<div className="flex-1">
				<Title level={1}>한재석</Title>
				<Text size="sm">Frontend Enginner</Text>
			</div>
			<div className="space-y-1">
				<div className="flex gap-2">
					<LuSmartphone size={15} className="mt-1"/>
					<Text size="sm"> 010-5124-2934</Text>
					<Divider variant="inline" />
					<LuMail size={15} className="mt-1"/>
					<Text size="sm">wotjr294@naver.com</Text>
				</div>
				<div className="flex gap-2">
					<LuGithub size={15} className="mt-1"/>
					<Text size="sm"><Link href="https://github.com/Jaeseokkong">github.com/Jaeseokkong</Link></Text>
					<Divider variant="inline" />
					<LuLaptop size={15} className="mt-1" />
					<Text size="sm"><Link href="https://hjs-blog.vercel.app/">blog: hjs-blog.vercel.app</Link></Text>
				</div>
			</div>
		</header>
	)
}
