import React from "react";
import FrontLayout from "layouts/front.layout";
import { documents } from "components/HeaderComp";
import Link from "next/link";

const Documents = () => {
	return (
		<FrontLayout>
			<div className="documents container">
				<div className="document-inner">
					<h2>Ralonick Professional Certificates</h2>
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
			</div>
		</FrontLayout>
	);
};

export default Documents;
