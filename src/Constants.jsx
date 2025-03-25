
export const contractAddress = "0xf0dbcf0d43d7eb207abc0be6805570cff95ea48f";

export const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "focus",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			}
		],
		"name": "addEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "skills",
				"type": "string[]"
			}
		],
		"name": "addProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "proficiency",
				"type": "uint256"
			}
		],
		"name": "addSkill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "speciality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			}
		],
		"name": "addWorkExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "bio",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cvLink",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllSkills",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "skillId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "proficiency",
						"type": "uint256"
					}
				],
				"internalType": "struct MyPortfolio.SkillInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getEducation",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "eduId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "period",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "qualification",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "focus",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "institute",
						"type": "string"
					}
				],
				"internalType": "struct MyPortfolio.EducationInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProjects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "projectId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "details",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "imageUrl",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "repoLink",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "skills",
						"type": "string[]"
					}
				],
				"internalType": "struct MyPortfolio.ProjectInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			}
		],
		"name": "getSkill",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "skillId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "proficiency",
						"type": "uint256"
					}
				],
				"internalType": "struct MyPortfolio.SkillInfo",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWorkExperience",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "workId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "duration",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "position",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "speciality",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "organization",
						"type": "string"
					}
				],
				"internalType": "struct MyPortfolio.WorkInfo[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myEducation",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "eduId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "focus",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myExperience",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "workId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "speciality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "myProjects",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "projectId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "profileImage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			}
		],
		"name": "removeSkill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_profileImage",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_bio",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_cvLink",
				"type": "string"
			}
		],
		"name": "setProfileInfo",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "supportMe",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newBio",
				"type": "string"
			}
		],
		"name": "updateBio",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newCvLink",
				"type": "string"
			}
		],
		"name": "updateCvLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "eduIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "period",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "qualification",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "focus",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "institute",
				"type": "string"
			}
		],
		"name": "updateEducation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newImageUrl",
				"type": "string"
			}
		],
		"name": "updateProfileImage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "projectIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "imageUrl",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "repoLink",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "skills",
				"type": "string[]"
			}
		],
		"name": "updateProject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "skillId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "proficiency",
				"type": "uint256"
			}
		],
		"name": "updateSkill",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "workIndex",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "duration",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "position",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "speciality",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "organization",
				"type": "string"
			}
		],
		"name": "updateWorkExperience",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const sampleData = {
  profileImage:
    "https://moccasin-occasional-monkey-331.mypinata.cloud/ipfs/bafkreifgzm2we7lfpvzbvbesoj3ayyby3q7ke3wmllfjmdb7j23sta3mya",
  bio: "Hey this is NonAcademy",

  projects: [
    {
      id: 0,
      title: "Decentralized Marketplace",
      details: "Details",
      imageUrl:
        "https://moccasin-occasional-monkey-331.mypinata.cloud/ipfs/QmaD79AGu9WquSU1Sz18HzjMz7Kqi3oxbzNzJ4fayopMXF",
    },
    {
      id: 1,
      title: "Decentralized Marketplace",
      details: "Details",
      imageUrl:
        "https://moccasin-occasional-monkey-331.mypinata.cloud/ipfs/QmaD79AGu9WquSU1Sz18HzjMz7Kqi3oxbzNzJ4fayopMXF",
      repoLink: "https://github.com/dapp",
    },
    {
      id: 2,
      title: "Decentralized Marketplace",
      details: "Details",
      imageUrl:
        "https://moccasin-occasional-monkey-331.mypinata.cloud/ipfs/QmaD79AGu9WquSU1Sz18HzjMz7Kqi3oxbzNzJ4fayopMXF",
    },
  ],

  education: [
    {
      id: 0,
      period: "2018-20",
      qualification: "BSc in Engg.",
      skillsLearned: "Python, JS, Blockchain",
      institute: "MIT",
    },
    {
      id: 1,
      period: "2018-20",
      qualification: "BSc in Engg.",
      skillsLearned: "Python, JS, Blockchain",
      institute: "MIT",
    },
    {
      id: 2,
      period: "2018-20",
      qualification: "BSc in Engg.",
      skillsLearned: "Python, JS, Blockchain",
      institute: "MIT",
    },
  ],

  experience: [
    {
      id: 0,
      duration: "2021-23",
      position: "Blockchain developer",
      skillsGained: "Blockchain",
      organization: "NonAcademy",
    },
    {
      id: 1,
      duration: "2021-23",
      position: "Blockchain developer",
      skillsGained: "Blockchain",
      organization: "NonAcademy",
    },
    {
      id: 2,
      duration: "2021-23",
      position: "Blockchain developer",
      skillsGained: "Blockchain",
      organization: "NonAcademy",
    },
  ],
};
