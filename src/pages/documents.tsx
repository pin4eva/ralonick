import React from "react";
import FrontLayout from "layouts/front.layout";
import { documents } from "components/HeaderComp";
import Link from "next/link";

const Documents = () => {
	return (
		<FrontLayout>
			<div className="documents container">
				{documents.map((item, i) => {
					return (
						<ul>
							<li>
								<Link href={item.link}>{item.name}</Link>
							</li>
						</ul>
					);
				})}
				;
			</div>
		</FrontLayout>
	);
};

export default Documents;
