/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   utils.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: thzeribi <thzeribi@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/08/03 17:29:29 by thzeribi          #+#    #+#             */
/*   Updated: 2024/05/07 01:11:50 by thzeribi         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function isUp() {
	try {
		return sessionStorage.getItem("oidc.user:https://auth.42.fr/auth/realms/students-42:frontend-react") ? true : false;
	} catch(err) {
		return null;
	}
}

function getAccessToken() {
	if (isUp()) {
		try {
			const data = sessionStorage.getItem("oidc.user:https://auth.42.fr/auth/realms/students-42:frontend-react");
			const jsonData = JSON.parse(data);
			return jsonData.access_token;
		} catch(err) {
			return (null);
		}
	} else {
	}

}

async function getBox() {
	if (isUp()) {
		try {
			return await new Promise(resolve => {
				const interval = setInterval(() => {
					const box = document.getElementsByClassName("xl:w-1/5 border-b-[1px] xl:border-r-[1px]");
					if (box.length > 0) {
						resolve(box[0]);
						clearInterval(interval);
					}
				}, 100);
			});
		}
		catch (err) {
			return (null);
		}
	} else {
		try {
			return (document.getElementById("milestones-tab"))
		} catch (err) {
			return null;
		}
	}
}

function getLogin() {
	if (isUp()) {
		try {
			const data = sessionStorage.getItem("oidc.user:https://auth.42.fr/auth/realms/students-42:frontend-react");
			const jsonData = JSON.parse(data);
			return jsonData.profile.preferred_username;
		} catch(err) {
			return (null);
		}
	} else {
		try {
			return (document.querySelector(".login[data-login]").getAttribute("data-login"));
		}
		catch (err) {
			return (null);
		}
	}
}
